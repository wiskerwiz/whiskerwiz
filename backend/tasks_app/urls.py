from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, SymptomViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'symptoms', SymptomViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
