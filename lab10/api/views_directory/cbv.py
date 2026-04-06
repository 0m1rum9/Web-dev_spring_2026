from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from api.views_directory.fbv import (
    create_product,
    delete_product,
    get_product,
    get_products,
    update_product,
)


class ProductListAPIView(APIView):
    def get(self, request: Request) -> Response:
        return get_products()

    def post(self, request: Request) -> Response:
        return create_product(request)


class ProductDetailAPIView(APIView):
    def get(self, request: Request, id: int) -> Response:
        return get_product(id)

    def put(self, request: Request, id: int) -> Response:
        return update_product(request, id)

    def delete(self, request: Request, id: int) -> Response:
        return delete_product(id)
