export default function TodoUi() {
    return <div class="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
    <div class="w-full mx-auto rounded-lg border border-gray-700 p-8 lg:py-12 lg:px-14 text-gray-300" style="max-width: 800px" x-data="app()" x-init="addItem()">
        <div class="mb-10">
            <h1 class="text-2xl font-bold"><i class="mdi mdi-star text-yellow-300 text-3xl leading-none align-bottom"></i> Todos</h1>
        </div>
        <div class="mb-10">
            <div x-if="todos.length">
                <ul @click.away="defocusItems()" class="-mx-1">
                    <div x-for="(item,index) in todos">
                        <li @click="focusItem(index)" @dblclick="openItem(index)" class="px-2 py-2 rounded transition-all flex text-md" :class="{'bg-indigo-800':item.focused,'bg-gray-700 shadow-lg px-4 py-4 my-10 -mx-2':item.open,'mb-1 cursor-pointer':!item.open}" :key="index">
                            <div class="flex-none w-10 leading-none">
                                <input type="checkbox" :checked="item.checked" @click="item.checked=!item.checked">
                            </div>
                            <div class="flex-grow max-w-full">
                                <div class="w-full leading-none">
                                    <h3 class="text-md leading-none truncate w-full pr-10" :class="item.title.length?'text-gray-300':'text-gray-500'" x-text="item.title||'New todo...'" x-show="!item.open"></h3>
                                    <input type="text" x-show="item.open" class="text-md w-full bg-transparent text-gray-300 leading-none focus:outline-none mb-2" x-model="item.title" :id="`titleField${index}`" placeholder="New todo..."/>
                                </div>
                                <div class="w-full" x-show="item.open">
                                    <textarea class="text-md w-full bg-transparent text-gray-300 leading-tight focus:outline-none" rows="10" x-model="item.notes" placeholder="Notes"></textarea>
                                </div>
                                <div class="w-full flex justify-end" x-show="item.open">
                                    <button class="p-1 -mr-1 focus:outline-none hover:text-red-300" @click="removeItem(index)"><i class="mdi mdi-trash-can-outline"></i></button>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
            <div x-if="!todos.length">
                <p class="text-gray-500">No todos</p>
            </div>
        </div>
        <div class="flex justify-center">
            <button class="py-1 px-10 border border-gray-800 hover:border-gray-700 rounded leading-none focus:outline-none text-xl" @click="addItem()"><i class="mdi mdi-plus"></i></button>
        </div>
    </div>
</div>;
}
<script>
function app(){
    return {
        todos: [],
        focusItem: function(index) {
            if ( !this.todos[index].open ) {
                for(let i = 0; i < this.todos.length; i++){
                    this.todos[i].open = false;
                    this.todos[i].focused = i == index;
                }
            }
        },
        openItem: function(index) {
            for(let i = 0; i < this.todos.length; i++){
                this.todos[i].focused = false;
                this.todos[i].open = i == index;
            }
            setTimeout(()=>document.getElementById(`titleField${index}`).focus(),10);
        },
        defocusItems: function() {
            for(let i = 0; i < this.todos.length; i++){
                this.todos[i].focused = false;
                this.todos[i].open = false;
            }
        },
        removeItem: function(index) {
            this.todos = this.todos.filter((todo, i) => {
                return i == index ? false : true;
            });
            setTimeout(()=>this.defocusItems(),10);
        },
        addItem: function() {
            this.todos.push({
                title: '',
                notes: '',
                checked: false,
                focused: false,
                open: false
            });
            setTimeout(()=>this.openItem(this.todos.length-1),10);
        }
    }
}
</script>

<!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>