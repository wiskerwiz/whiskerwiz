from django.db import models
from django.conf import settings

class Task(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    task_description = models.CharField(max_length=255)
    due_date = models.DateTimeField()
    reminder_time = models.DateTimeField()
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.task_description

class Symptom(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    symptom_description = models.CharField(max_length=255)
    date_logged = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.symptom_description
