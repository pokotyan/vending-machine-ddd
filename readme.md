# 起動方法
- lerna

lerna init  
lerna clean  
lerna bootstrap  

- vending-machineのbuild

cd vending-machine/  
npm run build  

- uiのpackage-lock.jsonを削除（なぜかvending-machineが入っていないため）

cd ../ui  
rm package-lock.json  

- uiのpackage-lock.jsonにvending-machineを追加

cd ..  
npm run bootstrap  

- run

cd ui/  
ts-node src/index.ts  
