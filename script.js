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
            // data-val属性から数字を取得して入力欄に追加
            blockCountInput.value += btn.getAttribute('data-val');
        });
    });

    // C(クリア)ボタンを押した時の処理
    clearBtn.addEventListener('click', () => {
        blockCountInput.value = '';
    });

    // DEL(デリート)ボタンを押した時の処理
    delBtn.addEventListener('click', () => {
        // 現在の文字列の最後尾を1文字削る
        blockCountInput.value = blockCountInput.value.slice(0, -1);
    });

    // 計算ボタンの処理
    calcBtn.addEventListener('click', () => {
        const n = parseInt(blockCountInput.value, 10);
        
        resultList.innerHTML = '';
        resultArea.classList.add('hidden');

        if (isNaN(n) || n < 2) {
            alert('Please enter a number of 2 or more.');
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
            title.textContent = `Interval: ${interval} blocks (Torches needed: ${torchCount})`;
            
            const detail = document.createElement('div');
            detail.className = 'detail';
            detail.textContent = `Empty space between torches: ${emptySpaces} blocks`;
            
            li.appendChild(title);
            li.appendChild(detail);
            resultList.appendChild(li);
        });

        resultArea.classList.remove('hidden');
    });
});
