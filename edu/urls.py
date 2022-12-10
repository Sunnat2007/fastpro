from django.urls import path, include
from . import views
urlpatterns = [
    path('' , views.base , name='base'),
    path('html' , views.html , name='html'),
    path('html/<slug:slug>/', views.html, name='html'),
]