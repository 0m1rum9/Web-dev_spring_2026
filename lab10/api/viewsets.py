from rest_framework.decorators import action
from rest_framework import viewsets
from rest_framework.request import Request
from http import HTTPMethod

from rest_framework.views import Response
from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    @action(detail=True, methods=[HTTPMethod.GET])
    def products(self, request: Request, pk=None) -> Response:
        category = self.get_object()
        products = Product.objects.filter(category=category)
        return Response(ProductSerializer(products, many=True).data)
