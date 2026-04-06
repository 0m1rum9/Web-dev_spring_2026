from django.urls import include, path
from rest_framework.routers import DefaultRouter
from api.views import CategoryView, ProductView
from api.views_directory.cbv import ProductDetailAPIView, ProductListAPIView
from api.viewsets import CategoryViewSet, ProductViewSet
from api.views_directory.fbv import product_detail, products_list

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
    # path("products", view=products_list),
    # path("products/<int:id>", view=product_detail),
    # CBV
    path("products", view=ProductListAPIView.as_view()),
    path("products/<int:id>", view=ProductDetailAPIView.as_view()),
]
