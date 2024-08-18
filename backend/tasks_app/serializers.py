# tasks_app/serializers.py
from rest_framework import serializers
from .models import Task, Symptom, PainRecord, PeriodRecord, Medication, SleepRecord, WeightRecord

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'task_description', 'due_date', 'reminder_time', 'status']

class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptom
        fields = ['id', 'symptom_description', 'date_logged']

class PainRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PainRecord
        fields = ['id', 'pain_level', 'pain_location', 'date_logged']

class PeriodRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeriodRecord
        fields = ['id', 'start_date', 'end_date']

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ['id', 'medication_name', 'dosage', 'frequency', 'start_date', 'end_date']

class SleepRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = SleepRecord
        fields = ['id', 'sleep_duration', 'sleep_quality', 'date_logged']

class WeightRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeightRecord
        fields = ['id', 'weight', 'date_logged']
        read_only_fields = ['user']