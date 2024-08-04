from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class Task(models.Model):
    user = models.ForeignKey('auth_app.CustomUser', on_delete=models.CASCADE)
    task_description = models.CharField(max_length=255)
    due_date = models.DateTimeField(null=True, blank=True)
    reminder_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=50, default='pending')

    def __str__(self):
        return self.task_description

class Symptom(models.Model):
    user = models.ForeignKey('auth_app.CustomUser', on_delete=models.CASCADE)
    symptom_description = models.CharField(max_length=255)
    date_logged = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.symptom_description
