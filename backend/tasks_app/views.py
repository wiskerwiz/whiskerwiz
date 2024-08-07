# tasks_app/views.py
from rest_framework import generics
from .models import Task, Symptom, PainRecord, PeriodRecord, Medication, SleepRecord
from .serializers import TaskSerializer, SymptomSerializer, PainRecordSerializer, PeriodRecordSerializer, MedicationSerializer, SleepRecordSerializer

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SymptomListCreate(generics.ListCreateAPIView):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PainRecordListCreate(generics.ListCreateAPIView):
    queryset = PainRecord.objects.all()
    serializer_class = PainRecordSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PeriodRecordListCreate(generics.ListCreateAPIView):
    queryset = PeriodRecord.objects.all()
    serializer_class = PeriodRecordSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MedicationListCreate(generics.ListCreateAPIView):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SleepRecordListCreate(generics.ListCreateAPIView):
    queryset = SleepRecord.objects.all()
    serializer_class = SleepRecordSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# # tasks_app/views.py
# from rest_framework import viewsets, generics
# from .models import Task, Symptom
# from .serializers import TaskSerializer, SymptomSerializer
# from django.contrib.auth.models import User

# class TaskListCreate(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

# class SymptomListCreate(generics.ListCreateAPIView):
#     queryset = Symptom.objects.all()
#     serializer_class = SymptomSerializer

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)


# class TaskViewSet(viewsets.ModelViewSet):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

# class SymptomViewSet(viewsets.ModelViewSet):
#     queryset = Symptom.objects.all()
#     serializer_class = SymptomSerializer


#console.turbo