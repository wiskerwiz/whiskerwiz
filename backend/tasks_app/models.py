
from django.db import models
from django.conf import settings
from django_q.tasks import async_task
import datetime

class Task(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    task_description = models.CharField(max_length=255)
    due_date = models.DateField()
    reminder_time = models.TimeField()
    status = models.CharField(max_length=50)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        reminder_datetime = datetime.datetime.combine(self.due_date, self.reminder_time)
        async_task('tasks_app.tasks.send_reminder', self.id, schedule=reminder_datetime)

class Symptom(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    symptom_description = models.CharField(max_length=255)
    date_logged = models.DateField()

class PainRecord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    pain_level = models.IntegerField()
    pain_location = models.CharField(max_length=255)
    date_logged = models.DateField(auto_now_add=True)

class PeriodRecord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

class Medication(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    medication_name = models.CharField(max_length=255)
    dosage = models.CharField(max_length=255)
    frequency = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

class SleepRecord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    sleep_duration = models.DurationField()
    sleep_quality = models.IntegerField()
    date_logged = models.DateField()

class WeightRecord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    date_logged = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.weight}kg on {self.date_logged}"