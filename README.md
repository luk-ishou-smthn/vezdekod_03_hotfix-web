#### ! Советую посмотреть [список коммитов](https://github.com/luk-ishou-smthn/vezdekod_03_hotfix-web/commits/master)  
##### > Развёрнуто на [GitHub Pages](https://luk-ishou-smthn.github.io/vezdekod_03_hotfix-web/)  

### Основные фичи

Что не стал исправлять специально:  
- [ ] После отмены заказа, подпись его статуса остается в значении "Оплачен"  
- [ ] На экране после оплаты заказа, кнопка "Мои заказы" реализована как `<div>`, хотя должна как `<Link`  
<sub>(вдруг ваши тесты не найдут в DOM тег `<a>`, тк ожидался `<div>` с заданным классом)</sub>  
  
  --- 

* Исправлены все баги, согласно баглисту из задания  
* Добавлен линтер ESLint и правила к нему (standard + свои)  
* Произедено переформатирование кода согласно правилам ESLint  
* Удалены ненужные зависимости, обновлены текущие, выполнен переход на `@vkontakte/vk-bridge`  
* Исправлен баг, когда просто при фокусе на элемент с выбором даты-времени доставки, сбрасывался флаг "как можно быстрее"  
* В корзине реализовано сохранение промежуточного состояния в localStorage через React хук `useEffect` [(коммит)](https://github.com/luk-ishou-smthn/vezdekod_03_hotfix-web/commit/a245efdcf069ae73e2892bc8f92abae9eec6191b)  
* Добавлено приведение суммы заказа из человеко-понятного формата, обратно в Number, для успешности выполнения проверки на сумму заказа  
* Добавлена проверка на сумму заказа и на "экран" оплаты  
* Исправлено поведение и UX кнопки сверху справа (кидала на несуществующий роут `/edit`)  
* Улучшен UX кнопок оформления заказа и оплаты  
* При сборке проекта учитывается относительный путь до ресурсов приложения и в React роутере (параметр `basename`)  