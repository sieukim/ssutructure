class Tree{
    constructor(root){
        this.root = root;
    }

    clear(){
    }

    add(data,vizCallback){
        this.root = this.root.add(data,vizCallback);
        vizCallback();
    }

    remove(data,vizCallback){
        this.root = this.root.remove(data,vizCallback);
        vizCallback();
    }

    contain(data){
        return this.root.contain(data);        
    }

    // 트리를 Treeviz 라이브러리가 사용할 수 있는 데이터로 만들어 리턴 
    // Binary Tree 기본형
    traversal(root=this.root, parentId=null) {
        if (root.isEnd()) return [];
      
        const id = Number.parseInt(root.data);
      
        const data = {
          id,
          text_1: root.data,
          father: parentId,
          color: root.getColor(),
          textColor: root.getColor()=='red'?'black' : root.getColor()=='black'?'red':'black'
        };
      
        return [data]
          .concat(this.traversal(root.left, id))
          .concat(this.traversal(root.right, id));
      }
         
}

module.exports = Tree;