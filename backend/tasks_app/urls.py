from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, SymptomViewSet, TaskListCreate, SymptomListCreate

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'symptoms', SymptomViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
    path('symptoms/', SymptomListCreate.as_view(), name='symptom-list-create'),
]
