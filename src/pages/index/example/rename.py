
import os.path
rootdir = './'

for parent, dirnames, filenames in os.walk(rootdir):
    for filename in filenames:
       
        print(filename)  # 输出rootdir路径下所有文件（包含子文件）信息
        #newName="L"+str(i)+".jpg"
        #os.rename(os.path.join(parent, filename), os.path.join(parent, newName))
        if filename == 'main.vue':
            newName = 'index.vue'
            os.rename(os.path.join(parent, filename), os.path.join(parent, newName))
