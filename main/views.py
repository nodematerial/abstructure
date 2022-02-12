from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse

def index(request):
    return render(request, 'main/index.html', {})

def ajax_number(request):
    #number1 = int(request.POST.get('number1'))
    #number2 = int(request.POST.get('number2'))
    #poyota = int(request.POST.get('poyota'))
    number1=1
    number2=2
    poyota=1
    supernova = request.POST.getlist("supernova[]")
    plus = number1 + number2
    minus = number1 - number2
    SUPER_POYOTA = poyota*1000000000 
    d = {
        'plus': plus,
        'minus': minus,
        'poyota': SUPER_POYOTA,
    }
    print(d)
    print(type(supernova))
    print(f'supernova is {supernova}')
    return JsonResponse(d)