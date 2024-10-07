from django.contrib import admin

from chat.models import Message


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('body_message', 'mentor', 'student')
