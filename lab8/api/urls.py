from django.urls import path
from api.views import CategoryView, ProductView


urlpatterns = [
    path("products", view=ProductView.as_view()),
    path("products/<int:id>", ProductView.get_one),
    path("categories", view=CategoryView.as_view()),
    path("categories/<int:id>", CategoryView.get_one),
    path("categories/<int:id>/products", CategoryView.get_products),
]
