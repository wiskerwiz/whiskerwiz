from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

class Task(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    task_description = models.TextField()
    due_date = models.DateTimeField()
    reminder_time = models.DateTimeField()
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('completed', 'Completed')])
