wget http://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
tar xvf install-tl-unx.tar.gz
cd install-tl-2*
sudo ./install-tl -no-gui -repository http://mirror.ctan.org/systems/texlive/tlnet/
sudo /usr/local/texlive/2021/bin/x86_64-linux/tlmgr path add
sudo apt update
sudo apt upgrade -y
sudo apt install zip unzip
sudo apt install python3-pip -y
pip install django
pip install matplotlib
pip install django-environ