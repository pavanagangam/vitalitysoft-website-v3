from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('api/quote/', views.api_quote_request, name='api_quote'),
    path('api/contact/', views.api_contact, name='api_contact'),
    path('api/chatbot/', views.api_chatbot, name='api_chatbot'),
]
