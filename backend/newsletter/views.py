from django.shortcuts import render
from .models import Subscribers
from .serializers import SubscibersSerializers
from rest_framework.viewsets import ModelViewSet
from django.http import HttpResponse

class SubscribersViewset(ModelViewSet):
    queryset = Subscribers.objects.all()
    serializer_class = SubscibersSerializers

def verify_email(request, token):
    try:
        subscriber = Subscribers.objects.get(verified_token=token)
        subscriber.verified = True
        subscriber.save()
        return render(request, 'verification_success.html')
    except Subscribers.DoesNotExist:
        return render(request, 'verification_failed.html', status=400)

