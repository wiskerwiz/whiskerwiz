# tasks_app/tasks.py
from django.core.mail import send_mail
from .models import Task

def send_reminder(task_id):
    try:
        task = Task.objects.get(id=task_id)
        send_mail(
            'Task Reminder',
            f'Reminder for your task: {task.task_description}',
            'from@example.com',
            [task.user.email],
            fail_silently=False,
        )
    except Task.DoesNotExist:
        pass
