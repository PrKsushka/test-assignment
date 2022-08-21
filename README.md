## test assignment

```bash
npm run dev
# or
yarn dev
```
<p>
P.S. Относительно 5 и 6 пункта. Я не совсем поняла куда эту логику нужно добавлять, но я расписала как это можно реализовать
Я предлагаю следующую структуру на стороне сервера: две таблицы

C помощью запросов (например как на скрине ниже) можно забрать данные о главном и дочерних комментариях

В итоге получить структуру где есть главный комментарий и массив с прилежащими дочерними комментариями
Например:
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
