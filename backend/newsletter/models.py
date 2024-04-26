import smtplib
from django.db import models
import uuid
from django.urls import reverse
from .services import send_verification

class Subscribers(models.Model):
    email = models.EmailField() 
    joined_at = models.DateTimeField(auto_now_add=True)
    verified_token = models.UUIDField(default=uuid.uuid4, editable=False)
    valid_user = models.BooleanField(default=False)

    def __str__(self):
        return self.email
    
    def save(self, *args, **kwargs):
        if not self.pk:
            send_verification(self.verified_token, self.email)
            self.valid_user = True
        super(Subscribers, self).save(*args, **kwargs)
        


