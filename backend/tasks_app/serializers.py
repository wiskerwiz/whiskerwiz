from rest_framework import serializers
from .models import Task, Symptom

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'task_description', 'due_date', 'reminder_time', 'status']

class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptom
        fields = ['id', 'symptom_description', 'date_logged']
