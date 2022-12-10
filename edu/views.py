from django.shortcuts import render
from .models import *

# Create your views here.

def base(request):
    
    return render(request , 'base.html' , {})

def html(request):
    dars = Dars.objects.all()
    return render(request , 'html.html' , {'darslar':dars})