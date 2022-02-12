from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse

import json
from .utils import *

from matplotlib.font_manager import json_load

def index(request):
    return render(request, 'main/index.html', {})

def ajax_number(request):
    print(request.POST)
    nodes = request.POST.get("nodes")
    seq_cluster = request.POST.get("seq_cluster")
    nodes_dict = json.loads(nodes)
    seq_cluster_dict = json.loads(seq_cluster)
    a = nodes_dict['1']
    b = seq_cluster_dict[0]
    c = printing()
    print(c)
    d = {
        'a':a,
        'b':b,
        'c':c
    }
    return JsonResponse(d)