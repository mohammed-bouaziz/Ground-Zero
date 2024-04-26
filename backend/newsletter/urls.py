from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubscribersViewset, verify_email

router = DefaultRouter()
router.register(r'subscribers', SubscribersViewset)

urlpatterns = [
    path('', include(router.urls)),
    path('verify/<uuid:token>', verify_email, name='verify_email')
]
