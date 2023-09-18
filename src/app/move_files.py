print("Script başlatılıyor...")

import os
import shutil

src_dir = 'C:\\Users\\90551\\OneDrive - Manisa Celal Bayar Üniversitesi\\Masaüstü\\e-commerce-next.js-main\\src'
dest_dir = 'C:\\Users\\90551\\OneDrive - Manisa Celal Bayar Üniversitesi\\Masaüstü\\e-commerce-next.js-main\\pages'

print(f"Kaynak Dizin: {src_dir}")
print(f"Hedef Dizin: {dest_dir}")

for subdir, _, files in os.walk(src_dir):
    print(f"Alt Dizin: {subdir}, Dosyalar: {files}")
    for file in files:
        if file == 'index.js':
            src_file_path = os.path.join(subdir, file)
            relative_subdir = os.path.relpath(subdir, src_dir)
            dest_subdir = os.path.join(dest_dir, relative_subdir)
            dest_file_path = os.path.join(dest_subdir, file)
            
            os.makedirs(dest_subdir, exist_ok=True)
            
            if not os.path.exists(dest_file_path):
                shutil.copy(src_file_path, dest_file_path)
                print(f"Kopyalandı: {src_file_path} -> {dest_file_path}")
            else:
                print(f"Hedef dosya zaten var, atlandı: {dest_file_path}")
