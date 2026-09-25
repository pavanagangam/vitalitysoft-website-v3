from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
import os

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('website.urls')),

    # Direct routes for brand static assets (/brand/<filename> & /static/brand/<filename>)
    re_path(r'^brand/(?P<path>.*)$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'public', 'brand'),
    }),
    re_path(r'^static/brand/(?P<path>.*)$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'public', 'brand'),
    }),
    re_path(r'^logo\.png$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'public'),
        'path': 'logo.png',
    }),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static('/', document_root=os.path.join(settings.BASE_DIR, 'public'))
