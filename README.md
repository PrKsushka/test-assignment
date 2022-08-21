## Test assignment 🌌

Video review for test assignment <a href="https://drive.google.com/file/d/1bXm5C6VwPB8NtvW1QXa05MIC5PdA473T/view?usp=sharing">here</a>
```bash
npm run dev
# or
yarn dev
```
<p>
P.S. Относительно 5 и 6 пункта. Я не совсем поняла куда эту логику нужно добавлять, но я расписала как это можно реализовать. :)
Я предлагаю следующую структуру на стороне сервера: две таблицы
<br/>

P.S. About points 5 and 6. I didn’t quite understand where this logic should be, but here you can read how it can be implemented. :)
I suggest the following server side structure: two tables

<img width="325" alt="id integer" src="https://user-images.githubusercontent.com/90864065/185801978-3e4c1825-4392-47be-83d0-9d7835c91e2f.png">
<br/>
C помощью запросов (например как на скрине ниже) можно забрать данные о главном и дочерних комментариях
<br/>

With the help of queries (for example, as in the screenshot below), you can get data about the main and child comments

<img width="910" alt="image" src="https://user-images.githubusercontent.com/90864065/185802514-b84344e3-3fcb-42ce-a3ff-55ac7f9055c8.png">

В итоге получить структуру где есть главный комментарий и массив с прилежащими дочерними комментариями
Например:
<br />

As the result, get a structure where there is a main comment and an array with child comments
For example:
</p>

```
const data = {
        "comments": [
            {
                "id": 1,
                "comment": "first comment",
                "children": [
                    {
                        "id": 2,
                        "comment": "child comment1"
                    },
                    {
                        "id": 3,
                        "comment": "child comment2"
                    },
                    {
                        "id": 4,
                        "comment": "child comment3"
                    }
                ]
            },
            {
                "id": 5,
                "comment": "second comment",
                "children": [
                    {
                        "id": 6,
                        "comment": "child comment4"
                    },
                    {
                        "id": 7,
                        "comment": "child comment5"
                    },
                    {
                        "id": 8,
                        "comment": "child comment6"
                    }
                ]
            }
        ]
}
```

Относительно реализации клиентской части. Можно использовать список со вложенными списками 
Например можно выводить родительский комментарий с массивом дочерних вот так:
<br/>

About implementation of the client side. You can use a list with nested lists
For example, you can display a parent comment with an array of children like this:
```
const Comments:React.FunctionComponent = () => {
    return (
        <>
            {
                data.comments.map((el)=>(
                    <ul key={el.id}>
                        <li>{el.comment}</li>
                            <ul>
                            {
                                el.children.map((el)=>(
                                    <li>{el.comment}</li>
                                ))
                            }
                            </ul>
                    </ul>
                ))
            }
        </>
    )
}
```
Также к данной компоненте можно добалять логику с id,а еще лучше на стороне сервера сортировать по id 
<br />

It can be possible to create logic with id to this component, or even better, sort by id on the server side