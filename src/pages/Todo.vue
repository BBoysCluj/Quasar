<template>
  <q-page class="bg-grey-3 column" >
    <div class="row">
      <q-input
      v-model="newTask"
        class="col"
        square
        filled 
        bg-color="white"
        placeholder="Add Task" 
        dense>

        <template v-slot:append>
          <q-bt round dense flat icon="add" />
        </template>
        </q-input>
    </div>
    <q-list 
    class="bg-white"
    separator
    bordered>
      <q-item 
        v-for="(task, index) in tasks"
          :key="task.title"
          @click="task.done = !task.done"
          :class="{'done bg-blue-1' : task.done }"
          clickable
        v-riple>
        <q-item-section avatar>
          <q-checkbox 
            v-model="task.done" 
            class="no-pointer-events"
            color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }} </q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side>
            <q-btn 
            @click.stop="deleteTask(index)"
            flat 
            round 
            color="primary" 
            icon="delete" />
        </q-item-section>        
      </q-item>

    </q-list>
  </q-page>
</template>

<script>
export default { 
  data (){
    return {
      newTask:'',
      tasks: [
      {
        title:'Get bananas',
        done:false
      },
      {
        title:'Eat bananas',
        done:true
      },
      {
        title:'Poo bananas',
        done:false
      }
      ]
    }
  },
    methods: {
      deleteTask(index){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete? ',
        cancel: true,
        persistent: true
      }).onOk(() => {
         this.tasks.splice(index,1)
         this.$q.notify('Message')
      })
    },
    addTask(){
      console.log('addTask')
    }
      }
    }
  
</script>
<style lang="scss">
.done {
  .q-item__label
  {}
}
  
</style>
{
  "key": "ctrl+alt+x",
  "args": " ",
  "command": "extension.splitLine",
  "when": "editorTextFocus && !editorReadonly"
}

{
  "key": "ctrl+alt+x",
  "command": "extension.splitLine",
  "when": "editorTextFocus && !editorReadonly"
}