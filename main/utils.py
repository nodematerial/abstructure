import subprocess
import os
import sys
from collections import defaultdict
sys.path.append(os.path.abspath("tex/"))

conv_table = {0:'[0]', 1:'[2]', 2:'[4]', 3:'[6]', 4:'[1]', 5:'[3]', 6:'[5]',
            7:'[7]',8:'[:30]', 9:'[:60]', 10:'[:120]', 11:'[:150]', 12:'[:-150]',
            13:'[:-120]', 14:'[:-60]', 15:'[:-30]'}

def construct_chemfig_expression(nodes, seq_cluster, direct_cluster):
    chemlist = []
    di = defaultdict(list)

    for (_, __, atom) in nodes.values():
        chemlist.append(atom)

    for i, seq in enumerate(seq_cluster):
        di[seq[0]].append((seq[1], i))

    for i in reversed(range(len(chemlist))):
        root = i
        branches = []
        directions = []
        for br, idx in di[i]:
            branch = ''
            brseq = seq_cluster[idx]
            brdir = direct_cluster[idx]
            for j in range(len(brseq)):
                if j == 0:
                    pass
                else:
                    direction = conv_table[brdir[j-1]]
                    atom = chemlist[brseq[j]]
                    branch += f'-{direction}{atom}'
            branches.append(branch)
            directions.append(brdir)
        #direction = conv_table[direct_cluster[i][0]]
        for (branch, direction) in zip(branches, directions):
            chemlist[root] +=  f'({branch})'
    result = chemlist[0]
    return result

def make_sentence(chem):
    sentence = f'\
\\documentclass{{article}}\n\
\\usepackage{{chemfig}}\n\
\\begin{{document}}\n\
\\begin{{figure}}[htbp]\n\
    \centering\n\
    \schemestart\n\
    \centering\n\
    \chemfig{{{chem}}}\n\
    \schemestop\n\
\end{{figure}}\n\
\end{{document}}'

    with open('texfiles/a.tex', mode='w') as f:
        f.write(sentence)

    return sentence

def run_lualatex():
    subprocess.run(['bash makepdf.sh > /dev/null'], shell=True)
