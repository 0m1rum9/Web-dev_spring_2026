from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.request import Request
from http import HTTPMethod, HTTPStatus

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework.views import Response
from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    queryset = Product.objects.all()
    filterset_fields = [
        "category",
        "is_active",
    ]
    search_fields = ["name"]
    order_fields = ["name", "price"]

    @action(detail=False, methods=[HTTPMethod.GET])
    def active(self, request: Request) -> Response:
        return Response(
            ProductSerializer(
                self.filter_queryset(self.get_queryset().filter(is_active=True)),
                many=True,
            ).data,
            status=HTTPStatus.OK,
        )


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    @action(detail=True, methods=[HTTPMethod.GET])
    def products(self, request: Request, pk=None) -> Response:
        category = self.get_object()
        products = Product.objects.filter(category=category)
        return Response(ProductSerializer(products, many=True).data)
