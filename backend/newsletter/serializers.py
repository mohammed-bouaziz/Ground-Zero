from rest_framework.serializers import ModelSerializer
from .models import Subscribers

class SubscibersSerializers(ModelSerializer):
    class Meta:
        model = Subscribers
        fields = "__all__"
