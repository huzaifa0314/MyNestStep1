const addTodobtn = document.getElementById('addTodo');
 const todoInput = document.getElementById('todoInput');
 

const supabaseClient = supabase.createClient('https://ftacomuevrikkxcwrfzi.supabase.co', 'sb_publishable_1_P0DPH16HrzEVoVO3j0dQ_U5732Wxm');


const getTodos = async () => {
  ul.innerHTML = '';
}

const response = await supabaseClient.from('my-next-step').select('*');
const todos = response.data;

for (let i = 0; i < todos.length; i++) {
  ul.innerHTML += `<div class="huz"><input  type="checkbox"> <span>${todos[i].task}</span> <button onclick="deleteTodo(${i})">❌</button></div>`;
}

getTodos();

const addTodo = async (event) => { 
  event.preventDefault();
  const task = todoInput.value.;
  await supabaseClient.from('my-next-step').insert([{ task }]);
getTodos(); 
}

const deleteTodo = async (id) => {
  const response = await supabaseClient.from('my-next-step').delete().eq('id', id);
  getTodos();
  if (response.error) 
    getTodos();
}

//  IE3kYf7n6D8vqqAw
// https://ftacomuevrikkxcwrfzi.supabase.co
// sb_publishable_1_P0DPH16HrzEVoVO3j0dQ_U5732Wxm
// https://ftacomuevrikkxcwrfzi.supabase.co/rest/v1/my-next-step