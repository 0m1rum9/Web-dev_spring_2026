from django.http import HttpRequest, JsonResponse
from django.views.generic import View
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from api.models import Category, Product


@method_decorator(csrf_exempt, name="dispatch")
class ProductView(View):
    def get(self, request: HttpRequest):
        filters = {
            "category_id": request.GET.get("category"),
            "is_active": None,
            "name": request.GET.get("search"),
        }
        if request.GET.get("active") == "false":
            filters["is_active"] = False
        elif request.GET.get("active") == "true":
            filters["is_active"] = True

        for key in list(filters.keys()):
            if filters[key] is None:
                filters.pop(key)
        return JsonResponse(
            list(Product.objects.filter(**filters).values()), status=200, safe=False
        )

    def post(self, request: HttpRequest):
        try:
            product = json.loads(request.body)
            Product.objects.create(**product)
            return JsonResponse({"msg": "created"}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"msg": "invalid json"}, status=400)

    @classmethod
    def get_one(cls, request: HttpRequest, id: int):
        return JsonResponse(
            (Product.objects.filter(id=id).values().first()), safe=False, status=200
        )


@method_decorator(csrf_exempt, name="dispatch")
class CategoryView(View):
    def get(self, request: HttpRequest):
        return JsonResponse(list(Category.objects.values()), safe=False, status=200)

    def post(self, request: HttpRequest):
        try:
            Category.objects.create(**json.loads(request.body))
            return JsonResponse({"msg": "created"}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"msg": "invalid json"}, status=400)

    @classmethod
    def get_one(cls, request: HttpRequest, id: int) -> JsonResponse:
        return JsonResponse(
            (Category.objects.filter(id=id).values().first()), safe=False, status=200
        )

    @classmethod
    def get_products(cls, request: HttpRequest, id: int):
        return JsonResponse(
            Product.objects.filter(id=id).values().first(), safe=False, status=200
        )
