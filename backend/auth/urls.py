from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path("", views.Index, name="index"),
    re_path("register/", views.RegisterUser, name="RegisterUser"),
    re_path("login/", views.LoginUser, name="LoginUser"),
    re_path("getUser/", views.GetUser, name="GetUser"),

    re_path('signup', views.signup),
    re_path('signin', views.login),
    re_path('test_token', views.test_token),
]

