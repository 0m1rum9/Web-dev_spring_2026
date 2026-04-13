from http import HTTPStatus
from django.http import QueryDict
from rest_framework import generics
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = "id"


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = "id"


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = "id"


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = "id"


class CategoryProductsAPIView(APIView):
    
    def get(self, request: Request, id: int) -> Response:
        category = generics.get_object_or_404(Category, id=id)
        products = Product.objects.filter(category=category)
        return Response(
            ProductSerializer(products, many=True).data, status=HTTPStatus.OK
        )
