from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Product
from rest_framework.request import Request
from api.serializers import ProductSerializer
from http import HTTPMethod, HTTPStatus


@api_view([HTTPMethod.GET, HTTPMethod.POST])
def products_list(request: Request) -> Response:
    if request.method == HTTPMethod.GET:
        return get_products()
    return create_product(request)


@api_view([HTTPMethod.PUT, HTTPMethod.DELETE, HTTPMethod.GET, HTTPMethod.PATCH])
def product_detail(request: Request, id: int) -> Response:
    if request.method == HTTPMethod.GET:
        return get_product(id)
    elif request.method == HTTPMethod.PUT:
        return update_product(request, id)
    return delete_product(id)


def get_products():
    products = Product.objects.all()
    return Response(ProductSerializer(products, many=True).data, status=HTTPStatus.OK)


def create_product(request: Request) -> Response:
    serializer = ProductSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=HTTPStatus.CREATED)

    return Response(serializer.errors, status=HTTPStatus.BAD_REQUEST)


def get_product(id: int) -> Response:

    product = get_object_or_404(Product, id=id)
    return Response(ProductSerializer(product).data, status=HTTPStatus.OK)


def update_product(request: Request, id: int) -> Response:
    product = get_object_or_404(Product, id=id)
    serializer = ProductSerializer(product, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=HTTPStatus.OK)
    return Response(serializer.errors, status=HTTPStatus.BAD_REQUEST)


def delete_product(id: int) -> Response:
    product = get_object_or_404(Product, id=id)
    product.delete()
    return Response(status=HTTPStatus.NO_CONTENT)
