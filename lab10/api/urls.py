from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api.views import CategoryView, ProductView
from api.views_directory.cbv import ProductDetailAPIView, ProductListAPIView
from api.views_directory.mixins import (
    ProductListAPIView as ProductListMixin,
    ProductDetailAPIView as ProductDetailMixin,
)
from api.views_directory.generics import (
    CategoryDetailAPIView,
    CategoryListAPIView,
    CategoryProductsAPIView,
    ProductListAPIView as ProductListGeneric,
    ProductDetailAPIView as ProductDetailGeneric,
)
from api.viewsets import CategoryViewSet, ProductViewSet
from api.views_directory.fbv import (
    active_products,
    expensive_products,
    product_detail,
    products_list,
)

# urlpatterns = [
#     path("products", view=ProductView.as_view()),
#     path("products/<int:id>", ProductView.get_one),
#     path("categories", view=CategoryView.as_view()),
#     path("categories/<int:id>", CategoryView.get_one),
#     path("categories/<int:id>/products", CategoryView.get_products),
# ]

router = DefaultRouter()

# router.register("products", ProductViewSet)
# router.register("categories", CategoryViewSet)


# FBV
urlpatterns = [
    # FBV
    # path("products/", view=products_list),
    # path("products/<int:id>/", view=product_detail),
    # CBV
    # path("products/", view=ProductListAPIView.as_view()),
    # path("products/<int:id>/", view=ProductDetailAPIView.as_view()),
    # Mixins
    # path("products/", view=ProductListMixin.as_view()),
    # path("products/<int:id>/", view=ProductDetailMixin.as_view()),
    # Generics
    path("products/", view=ProductListGeneric.as_view()),
    path("products/<int:id>/", view=ProductDetailGeneric.as_view()),
    path("categories/", view=CategoryListAPIView.as_view()),
    path("categories/<int:id>/", view=CategoryDetailAPIView.as_view()),
    path("categories/<int:id>/products/", view=CategoryProductsAPIView.as_view()),
]
