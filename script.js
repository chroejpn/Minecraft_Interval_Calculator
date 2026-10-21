document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calc-btn');
    const blockCountInput = document.getElementById('block-count');
    const resultArea = document.getElementById('result-area');
    const resultList = document.getElementById('result-list');

    // テンキー用の要素を取得
    const numBtns = document.querySelectorAll('.num-btn');
    const clearBtn = document.getElementById('clear-btn');
    const delBtn = document.getElementById('del-btn');

    // 数字ボタンを押した時の処理
    numBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            blockCountInput.value += btn.getAttribute('data-val');
        });
    });

    // C(クリア)ボタンを押した時の処理
    clearBtn.addEventListener('click', () => {
        blockCountInput.value = '';
    });

    // DEL(デリート)ボタンを押した時の処理
    delBtn.addEventListener('click', () => {
        blockCountInput.value = blockCountInput.value.slice(0, -1);
    });

    // 計算ボタンの処理
    calcBtn.addEventListener('click', () => {
        const n = parseInt(blockCountInput.value, 10);
        
        resultList.innerHTML = '';
        resultArea.classList.add('hidden');

        if (isNaN(n) || n < 2) {
            alert('2以上の整数を入力してください。');
            return;
        }

        const distance = n - 1;
        const patterns = [];

        for (let i = 1; i <= distance; i++) {
            if (distance % i === 0) {
                patterns.push(i);
            }
        }

        patterns.forEach(interval => {
            const torchCount = (distance / interval) + 1;
            const emptySpaces = interval - 1; 
            
            const li = document.createElement('li');
            
            const title = document.createElement('div');
            title.className = 'interval-title';
            title.textContent = `${interval}マス間隔 (必要な松明: ${torchCount}本)`;
            
            const detail = document.createElement('div');
            detail.className = 'detail';
            detail.textContent = `松明の間の空きスペース: ${emptySpaces}マス`;
            
            li.appendChild(title);
            li.appendChild(detail);
            resultList.appendChild(li);
        });

        resultArea.classList.remove('hidden');
    });
});
