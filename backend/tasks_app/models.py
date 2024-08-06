# tasks_app/models.py
from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    task_description = models.CharField(max_length=255)
    due_date = models.DateField()
    reminder_time = models.TimeField()
    status = models.CharField(max_length=50, default='pending')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.task_description

class Symptom(models.Model):
    symptom_description = models.CharField(max_length=255)
    date_logged = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.symptom_description
