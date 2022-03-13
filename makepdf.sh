cd texfiles
lualatex a.tex
convert -density 150 -trim a.pdf -quality 100 -flatten -sharpen 0x1.0 ../main/static/main/result.jpg