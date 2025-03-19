const addBtn = document.querySelector('.fa-plus'); // 추가버튼
const input = document.querySelector('.footer_input'); // input 요소
const items = document.querySelector('.items'); // ul

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.classList = 'item';

  itemRow.innerHTML = `
  <span>${text}</span>
  <i class="fa-solid fa-check"></i>
  <i class="fa-solid fa-trash-alt"></i>`;

  //   체크버튼 클릭시 클래스 추가
  itemRow.querySelector('.fa-check').addEventListener('click', () => {
    itemRow.classList.toggle('item_done');
  });

  //   삭제 버튼 클릭 시 itemRow 제거 이벤트
  itemRow.querySelector('.fa-trash-alt').addEventListener('click', () => {
    itemRow.remove();
  });

  requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));

  return itemRow;
}

function onAdd() {
  console.log('함수를 실행중이에요!');

  const text = input.value.trim();

  if (!text) {
    input.value = '';
    input.focus();
    return;
  }

  items.appendChild(createItem(text));
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', onAdd);

input.addEventListener('keyup', (e) => e.key === 'Enter' && onAdd());
