from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import ContactInquiry, QuoteRequest

def home_view(request):
    """Renders the main VitalitySoft Version 3 3D Interactive Web App."""
    return render(request, 'index.html')

@csrf_exempt
def api_quote_request(request):
    """API endpoint to receive and store interactive quote builder submissions."""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            quote = QuoteRequest.objects.create(
                full_name=data.get('name', 'Anonymous'),
                email=data.get('email', ''),
                phone=data.get('phone', ''),
                selected_technologies=', '.join(data.get('selectedTech', ['.NET'])),
                budget_range=data.get('budgetRange', 'Standard'),
                delivery_timeline=data.get('timeline', '1-3 Months'),
                project_details=data.get('details', '')
            )
            return JsonResponse({
                'status': 'success',
                'message': f'Quote request #{quote.id} created successfully for {quote.full_name}',
                'id': quote.id
            })
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'POST method required'}, status=405)

@csrf_exempt
def api_contact(request):
    """API endpoint to submit contact inquiries."""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            inquiry = ContactInquiry.objects.create(
                full_name=data.get('name', ''),
                email=data.get('email', ''),
                phone=data.get('phone', ''),
                message=data.get('message', '')
            )
            return JsonResponse({
                'status': 'success',
                'message': f'Inquiry #{inquiry.id} logged. Engineering team will contact within 24 hours.'
            })
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'POST method required'}, status=405)

@csrf_exempt
def api_chatbot(request):
    """Dynamic server-side Chatbot API endpoint for VitalityAI assistant."""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            query = data.get('message', '').strip().lower()

            if any(w in query for w in ['dotnet', '.net', 'microsoft', 'c#', 'blazor']):
                return JsonResponse({
                    'response': 'VitalitySoft provides enterprise Microsoft Technologies engineering: .NET 8+, ASP.NET Core web APIs, Blazor interactive UIs, SQL Server, and legacy migration. Starting from ₹1,50,000.',
                    'options': ['Open Quote Builder', 'Speak to an Architect']
                })
            elif any(w in query for w in ['salesforce', 'crm', 'apex', 'sales cloud']):
                return JsonResponse({
                    'response': 'We offer tailored Salesforce Solutions: Sales Cloud, Service Cloud, custom Apex development, Lightning Web Components, and automated CRM pipelines. Starting from ₹1,20,000.',
                    'options': ['Open Quote Builder', 'Salesforce Demo']
                })
            elif any(w in query for w in ['cloud', 'azure', 'devops', 'kubernetes', 'docker']):
                return JsonResponse({
                    'response': 'Our Cloud & DevOps services include Azure cloud migrations, automated CI/CD pipelines, Docker/Kubernetes container orchestration, and 24/7 monitoring. Starting from ₹95,000.',
                    'options': ['Open Quote Builder', 'DevOps Audit']
                })
            elif any(w in query for w in ['price', 'cost', 'quote', 'budget', 'estimate']):
                return JsonResponse({
                    'response': 'Our enterprise software services start from ₹45,000 for QA/Testing up to ₹1,50,000+ for enterprise .NET & Cloud microservices.',
                    'options': ['Open Quote Builder', 'Speak to an Architect']
                })
            elif any(w in query for w in ['contact', 'phone', 'location', 'address', 'hyderabad']):
                return JsonResponse({
                    'response': 'Headquartered in Hyderabad: Kukatpally, Telangana - 500090, India. Call us: +91 98666 48973 or Email: info@vitalitysoft.com.',
                    'options': ['Open Quote Builder', 'Call +91 98666 48973']
                })

            return JsonResponse({
                'response': 'VitalitySoft delivers 6 core technology services: Microsoft .NET, Salesforce CRM, Cloud DevOps, Mobile Apps, QA Testing, and SAP ABAP.',
                'options': ['Open Quote Builder', 'Get Cost Estimate']
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'POST method required'}, status=405)
