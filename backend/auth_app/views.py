# backend/auth_app/views.py
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import CustomUserSerializer
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

CustomUser = get_user_model()

class SignupView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")

        # If the username contains '@', assume it's an email
        if '@' in username:
            try:
                user_obj = User.objects.get(email=username.lower())
                username = user_obj.username
            except User.DoesNotExist:
                return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
        
class UserListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('login')
