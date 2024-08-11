# auth_app/urls.py
from django.urls import path
from .views import SignupView, UserListView, LogoutView, LoginView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('users/', UserListView.as_view(), name='users'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('login/', LoginView.as_view(), name='login'),
]
