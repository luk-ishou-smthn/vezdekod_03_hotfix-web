import React, { useMemo, useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as store from 'store2'
import accounting from 'accounting'

import Checkbox from './Checkbox'

import edit from '../img/edit.svg'
import './place.css'

const Basket = function({ match: { params: { areaId, itemId } }, foodAreas, order }) {
  const [faster, setFaster] = useState(store.get('basket.faster', true))
  const [time, setTime] = useState(store.get('basket.time', ''))
  const [selfService, setSelfService] = useState(store.get('basket.selfService', false))
  const area = foodAreas.filter(area => area.id === areaId)[0]
  const item = area.items.filter(item => item.id === itemId)[0]

  // Хук на изменение состояний, для сохранения в хранилище
  useEffect(() => {
    // Сохраняем состояния переменных
    store.set('basket.faster', faster)
    store.set('basket.time', time)
    store.set('basket.selfService', selfService)
  })

  const [price, products] = useMemo(() => {
    const foodIds = new Set((item.foods || []).map(item => item.id))

    const products = Object.values(order)
      .filter((value) => {
        const { item: { id } } = value

        return foodIds.has(id)
      })

    const result = products.reduce((result, value) => {
      const { count, item } = value
      // TODO: ну это моветон, в real-world приложениях руки бы оторвал тому кто так сделает
      return parseInt(result) + parseInt(item.price) * parseInt(count)
    }, 0)

    return [accounting.formatNumber(result, 0, ' '), products]
  }, [order, item])

  return (
    <div className='Place'>
      <header className='Place__header'>
        <aside className='Place__trz'>
          <h1 className='Place__head'>
            <Link to='/' className='Place__logo'>
              {area.name}
            </Link>
          </h1>
          <Link to={ `/place/${areaId}/${itemId}` } className='Place__change-tz'>
            <img
              alt='change-profile'
              src={ edit }
            />
          </Link>
        </aside>
      </header>
      <aside className='Place__restoraunt'>
        <img
          className='Place__restoraunt-logo'
          alt='Fastfood logo'
          src={ item.image }
        />
        <h2
          className='Place__restoraunt-name'
        >
          {item.name}
        </h2>
        <p className='Place__restoraunt-type'>
          {item.description}
        </p>
      </aside>
      <div className='Place__products-wrapper'>
        <ul className='Place__products'>
          {products.map(({ item, count }) => (
            <li
              className='Place__product'
              key={ item.id }
            >
              <img
                className='Place__product-logo'
                alt='Ordered product logo'
                src={ item.image }
              />
              <h3
                className='Place__product-name'
              >
                {item.name}
              </h3>
              <p
                className='Place__product-price'
              >
                Цена: {item.price}
              </p>
              <p
                className='Place__product-count'
              >
                x{count}
              </p>
            </li>
          ))}
        </ul>
        <Link
          className='Place__change-product'
          to={ `/place/${areaId}/${itemId}` }
        >
          Изменить
        </Link>
      </div>
      <div className='Place__choice'>
        <h3>Время:</h3>
        <div className='Place__choice-item'>
          <span>Как можно быстрее</span>
          <Checkbox
            checked={ faster }
            onToggle={ () => {
              if (faster) {
                setFaster(false)
              } else {
                setTime('')
                setFaster(true)
              }
            } }
          />
        </div>
        <div className='Place__choice-item'>
          <span>Назначить</span>
          <input
            type='time'
            value={ time }
            onChange={ (event) => {
              setFaster(false)
              setTime(event.target.value)
            } }
            onBlur={ () => {
              if (time) {
                setFaster(false)
              }
            } }
          />
        </div>
        <div className='Place__choice-item'>
          <h3>С собой</h3>
          <Checkbox checked={ selfService } onToggle={ () => setSelfService(!selfService) } />
        </div>
        <div className='Place__choice-item'>
          <h3>На месте</h3>
          <Checkbox checked={ !selfService } onToggle={ () => setSelfService(!setSelfService) } />
        </div>
      </div>
      <footer className='Place__footer'>
        {
          // TODO: в real-world приложениях должна быть проверка на количество позиций в заказе, а не на сумму заказа
          // Т.к price в человеко-понятном формате, надо привести обратно к типу Number
          accounting.unformat(price) > 0 ? (
            <Link to={ `/order/${area.id}/${item.id}` } className='Place__order'>
              Оплатить {price}
            </Link>
          ) : (
            <Link className='Place__order Place__order--disabled'>
              Корзина пуста
            </Link>
          )
        }
      </footer>
    </div>
  )
}

export default withRouter(Basket)
