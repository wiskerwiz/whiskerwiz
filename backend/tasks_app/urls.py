# tasks_app/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskListCreate, SymptomListCreate, PainRecordListCreate, PeriodRecordListCreate, MedicationListCreate, SleepRecordListCreate, WeightRecordListCreate

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
    path('symptoms/', SymptomListCreate.as_view(), name='symptom-list-create'),
    path('pain_records/', PainRecordListCreate.as_view(), name='pain-record-list-create'),
    path('period_records/', PeriodRecordListCreate.as_view(), name='period-record-list-create'),
    path('medications/', MedicationListCreate.as_view(), name='medication-list-create'),
    path('sleep_records/', SleepRecordListCreate.as_view(), name='sleep-record-list-create'),
    path('weight_records/', WeightRecordListCreate.as_view(), name='weight-record-list-create'),
]



# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import TaskViewSet, SymptomViewSet, TaskListCreate, SymptomListCreate

# router = DefaultRouter()
# router.register(r'tasks', TaskViewSet)
# router.register(r'symptoms', SymptomViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
#     path('tasks/', TaskListCreate.as_view(), name='task-list-create'),
#     path('symptoms/', SymptomListCreate.as_view(), name='symptom-list-create'),
# ]
