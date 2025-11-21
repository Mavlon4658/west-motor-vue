<script setup>
import { reactive, computed } from "vue"

defineOptions({
  name: "App"
})

const auctionForm = reactive({
  type: 'Copart (USA)',
  location: 'Abilene, TX',
  age: 'До 3 лет',
  priceUSD: 11500,
  displacement: 2000,
})

const auctionSelectResult = computed(() => {
  const { type, location, age } = auctionForm;
  return [type, location, age].filter(
    v => v !== undefined && v !== null && String(v).trim() !== ''
  )
})

const deliveryForm = reactive({
  from: 'США',
  to: 'Беларусь / Минск',
  through: 'Литва / Клайпеда',
  price1: false,
  price2: false,
})

const deliverySelectResult = computed(() => {
  const { from, to, through } = deliveryForm;
  return [from, to, through].filter(
    v => v !== undefined && v !== null && String(v).trim() !== ''
  )
})

const customsForm = reactive({
  vehicleType: 'Легковой автомобиль',
  fuelType: 'Бензин',
  importerType: 'Физическое лицо',
  price: false,
})

const customsSelectResult = computed(() => {
  const { vehicleType, fuelType, importerType } = customsForm;
  return [vehicleType, fuelType, importerType].filter(
    v => v !== undefined && v !== null && String(v).trim() !== ''
  )
})
</script>


<template>
  <div class="wrapper">

    <section class="bid">
      <div class="container bid-container">

        <div class="bid-header">
          <div class="bid-header__top">
            <div class="bid-header__left">
              <h2 class="bid-title">Твоя ставка</h2>
              <div class="bid-dots">
                <span class="bid-dot"></span>
                <span class="bid-dot"></span>
                <span class="bid-dot"></span>
                <span class="bid-dot"></span>
                <span class="bid-dot"></span>
              </div>
            </div>

            <div class="bid-current__price">
              <span class="bid-current__price-label">Текущая цена</span>
              <span class="bid-current__price-value">25 $</span>
            </div>

          </div>

          <div class="bid-header__line"></div>

          <div class="bid-estimate">
            <svg class="bid-estimate__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2V11.3333C2 12.8061 3.19391 14 4.66667 14H14M12.1999 5.5998L9.5388 8.42747C9.25665 8.72728 8.77289 8.70223 8.52322 8.37488L8.03378 7.73316C7.78508 7.40709 7.30375 7.38073 7.02094 7.67769L4.99987 9.7998M12.1999 5.5998H10.3999M12.1999 5.5998V7.3998" stroke="#4A5565" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="bid-estimate__value">Оценочная стоимость: 700 $ – 1 000 $</span>
          </div>
        </div>

        <div class="bid-body">
          <div class="bid-timer">
            <svg class="bid-timer__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1.5C5.72386 1.5 5.5 1.72386 5.5 2C5.5 2.27614 5.72386 2.5 6 2.5V2V1.5ZM10 2.5C10.2761 2.5 10.5 2.27614 10.5 2C10.5 1.72386 10.2761 1.5 10 1.5V2V2.5ZM11.6464 4.97978C11.4512 5.17504 11.4512 5.49162 11.6464 5.68689C11.8417 5.88215 12.1583 5.88215 12.3536 5.68689L12 5.33333L11.6464 4.97978ZM13.0202 2.97978C12.825 2.78452 12.5084 2.78452 12.3131 2.97978C12.1179 3.17504 12.1179 3.49162 12.3131 3.68689L12.6667 3.33333L13.0202 2.97978ZM13.6464 5.02022C13.8417 5.21548 14.1583 5.21548 14.3536 5.02022C14.5488 4.82496 14.5488 4.50838 14.3536 4.31311L14 4.66667L13.6464 5.02022ZM8.5 7.29591C8.5 7.01977 8.27614 6.79591 8 6.79591C7.72386 6.79591 7.5 7.01977 7.5 7.29591H8H8.5ZM7.5 9.66665C7.5 9.94279 7.72386 10.1666 8 10.1666C8.27614 10.1666 8.5 9.94279 8.5 9.66665H8H7.5ZM6 2V2.5H10V2V1.5H6V2ZM13 9H12.5C12.5 11.4853 10.4853 13.5 8 13.5V14V14.5C11.0376 14.5 13.5 12.0376 13.5 9H13ZM8 14V13.5C5.51472 13.5 3.5 11.4853 3.5 9H3H2.5C2.5 12.0376 4.96243 14.5 8 14.5V14ZM3 9H3.5C3.5 6.51472 5.51472 4.5 8 4.5V4V3.5C4.96243 3.5 2.5 5.96243 2.5 9H3ZM8 4V4.5C10.4853 4.5 12.5 6.51472 12.5 9H13H13.5C13.5 5.96243 11.0376 3.5 8 3.5V4ZM12 5.33333L12.3536 5.68689L13.6869 4.35355L13.3333 4L12.9798 3.64645L11.6464 4.97978L12 5.33333ZM13.3333 4L13.6869 3.64645L13.0202 2.97978L12.6667 3.33333L12.3131 3.68689L12.9798 4.35355L13.3333 4ZM13.3333 4L12.9798 4.35355L13.6464 5.02022L14 4.66667L14.3536 4.31311L13.6869 3.64645L13.3333 4ZM8 7.29591H7.5V9.66665H8H8.5V7.29591H8Z" fill="#4A5565" />
            </svg>
            <span class="bid-timer__text">Осталось 22м 48с на подачу ставки</span>
          </div>
          <main-btn>Сделать ставку</main-btn>
        </div>

        <p class="bid-note">Все ставки окончательные. Изучите отчет перед торгами</p>

      </div>
    </section>

    <!-- Const card -->
    <section>
      <div class="container">
        <div class="cost-card">

          <div class="cost-card__calculation">
              <button class="calculation-btn">
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.833252 0.833328H12.4999" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div class="calculation-text">
                  <div class="calculation-title">Стоимость авто в USD</div>
                  <div class="calculation-value">11 500 $</div>
              </div>
              <button class="calculation-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16675 10H15.8334" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 4.16667V15.8333" stroke="#0A0A0A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
          </div>

          <Accordion class="auction-accordion">
            <template #btn>
              <span class="accordion-btn__left">
                <svg class="accordion-btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="accordion-btn__text">Аукцион</span>
              </span>
              <span class="accordion-btn__text">2 145 $</span>
            </template>

            <template #result>
              <ul class="accordion-results">
                <li
                  v-for="(data, i) in auctionSelectResult"
                  :key="i"
                  class="accordion-results__item"
                >{{ data }}</li>
              </ul>
            </template>

            <template #body>
              <div class="form-group">
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Аукцион</span>
                  </div>
                  <select v-model="auctionForm.type" class="form-select">
                    <option value="Copart (USA)">Copart (USA)</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Площадка</span>
                    <img :src="$getImage('warning-icon.svg')" alt="" class="auction-form__icon">
                  </div>
                  <select v-model="auctionForm.location" class="form-select">
                    <option value="Abilene, TX" selected>Abilene, TX</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Возраст автомобиля</span>
                    <img :src="$getImage('warning-icon.svg')" alt="" class="auction-form__icon">
                  </div>
                  <select v-model="auctionForm.age" class="form-select">
                    <option value="До 3 лет" selected>До 3 лет</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Стоимость авто в USD</span>
                  </div>
                  <input-price v-model:value="auctionForm.priceUSD" class="form-inp"/>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Объем двигателя, см3</span>
                  </div>
                  <input-price v-model:value="auctionForm.displacement" class="form-inp"/>
                </div>
              </div>
            </template>
          </Accordion>

          <Accordion class="delivery-accordion">
            <template #btn>
              <span class="accordion-btn__left">
                <svg class="accordion-btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="accordion-btn__text">Доставка</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7.33333V10.6667M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z" stroke="#717179" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.00074 5.45467C8.0674 5.45467 8.12207 5.4 8.12074 5.33333C8.12074 5.26667 8.06607 5.212 7.9994 5.212C7.93274 5.212 7.8794 5.26667 7.8794 5.33333C7.8794 5.4 7.93274 5.45467 8.00074 5.45467" stroke="#717179" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span class="accordion-btn__text">2 145 $</span>
            </template>

            <template #result>
              <ul class="accordion-results">
                <li 
                  v-for="(data, i) in deliverySelectResult"
                  :key="i"
                  class="accordion-results__item"
                >{{ data }}</li>
              </ul>
            </template>

            <template #body>
              <div class="form-group">
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Доставка из</span>
                  </div>
                  <input type="text" v-model="deliveryForm.from" class="form-inp">
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Доставка в</span>
                  </div>
                  <select v-model="deliveryForm.to" class="form-select">
                    <option value="Беларусь / Минск">Беларусь / Минск</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Доставка через</span>
                  </div>
                  <select v-model="deliveryForm.through" class="form-select">
                    <option value="Литва / Клайпеда">Литва / Клайпеда</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div :class="['form-checkbox', deliveryForm.price1 ? 'active' : '']">
                  <div class="form-checkbox__left">
                    <span @click="deliveryForm.price1 = !deliveryForm.price1" class="form-checkbox__icon">
                      <img :src="$getImage('check-icon.svg')" alt="">
                    </span>
                    <span class="form-checkbox__text">Внедорожник</span>
                  </div>
                  <span class="form-checkbox__text">200 $</span>
                </div>
                <div :class="['form-checkbox', deliveryForm.price2 ? 'active' : '']">
                  <div class="form-checkbox__left">
                    <span @click="deliveryForm.price2 = !deliveryForm.price2" class="form-checkbox__icon">
                      <img :src="$getImage('check-icon.svg')" alt="">
                    </span>
                    <span class="form-checkbox__text">Продажа вне площадки</span>
                  </div>
                  <span class="form-checkbox__text">930 $</span>
                </div>
              </div>
            </template>
          </Accordion>

          <Accordion class="customs-accordion">
            <template #btn>
              <span class="accordion-btn__left">
                <svg class="accordion-btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="accordion-btn__text">Растаможка</span>
              </span>
              <span class="accordion-btn__text">2 145 BYN</span>
            </template>

            <template #result>
              <ul class="accordion-results">
                <li
                  v-for="(data, i) in customsSelectResult"
                  :key="i"
                  class="accordion-results__item"
                >{{ data }}</li>
              </ul>
            </template>

            <template #body>
              <div class="form-group">
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Тип ТС</span>
                  </div>
                  <select v-model="customsForm.vehicleType" class="form-select">
                    <option value="Легковой автомобиль">Легковой автомобиль</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Тип топлива????</span>
                  </div>
                  <select v-model="customsForm.fuelType" class="form-select">
                    <option value="Бензин">Бензин</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div class="form-control">
                  <div class="form-label">
                    <span class="form-label__text">Кто растамаживает</span>
                  </div>
                  <select v-model="customsForm.importerType" class="form-select">
                    <option value="Физическое лицо">Физическое лицо</option>
                    <option v-for="i in 4" :key="i" :value="`select ${i}`">select {{ i }}</option>
                  </select>
                </div>
                <div :class="['form-checkbox', customsForm.price1 ? 'active' : '']">
                  <div class="form-checkbox__left">
                    <span @click="customsForm.price1 = !customsForm.price1" class="form-checkbox__icon">
                      <img :src="$getImage('check-icon.svg')" alt="">
                    </span>
                    <span class="form-checkbox__text">Льготная растаможка</span>
                  </div>
                  <span class="form-checkbox__text">-280 $</span>
                </div>
              </div>
            </template>
          </Accordion>

          <Accordion class="total-accordion">
            <template #btn>
              <span class="accordion-btn__left">
                <svg class="accordion-btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="accordion-btn__text">Итого всех затрат</span>
              </span>
              <span class="accordion-btn__text">26 807 $</span>
            </template>

            <template #body>
              <div class="total-summaries">
                <div class="total-summary">
                  <div class="total-summary__title">Расходы на аукционе</div>
                  <ul class="total-summary__list">
                    <li class="total-summary__item">
                      <div class="total-summary__label">Стоимость авто</div>
                      <div class="total-summary__value">11500 $ / 9890 €</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Аукционный сбор</div>
                      <div class="total-summary__value">720 $</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Виртуальная ставка</div>
                      <div class="total-summary__value">129 $</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Плата за въезд</div>
                      <div class="total-summary__value">79 $</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Плата за отправку титула</div>
                      <div class="total-summary__value">20 $</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Экологический сбор</div>
                      <div class="total-summary__value">0 $</div>
                    </li>
                  </ul>
                </div>
                <div class="total-summary">
                  <div class="total-summary__title">Расходы на доставку</div>
                  <ul class="total-summary__list">
                    <li class="total-summary__item">
                      <div class="total-summary__label">Abilene → Houston</div>
                      <div class="total-summary__value">460 $</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Houston → Клайпеда</div>
                      <div class="total-summary__value">3 250 $</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Клайпеда → Минск</div>
                      <div class="total-summary__value">2 150 $</div>
                    </li>
                  </ul>
                </div>
                <div class="total-summary">
                  <div class="total-summary__title">Расходы на растаможку</div>
                  <ul class="total-summary__list">
                    <li class="total-summary__item">
                      <div class="total-summary__label">Таможенный сбор</div>
                      <div class="total-summary__value">120 BYN</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Расходы на СВХ</div>
                      <div class="total-summary__value">400 BYN</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Утилизационный сбор</div>
                      <div class="total-summary__value">544.5 BYN</div>
                    </li>
                    <li class="total-summary__item">
                      <div class="total-summary__label">Таможенная пошлина</div>
                      <div class="total-summary__value">120 BYN</div>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </Accordion>

          <div class="cost-card__foot">
            <p class="cost-card__note">* В расчет не входят комиссии за переводы. Все суммы действительны на дату расчёта и могут изменяться.</p>
            <div class="cost-card__links">
              <a href="#" class="cost-card__link">
                <img :src="$getImage('icon-pdf.svg')" alt="">
              </a>
              <div class="cost-card__links-grid">
                <a href="#" class="cost-card__link">
                  <img :src="$getImage('icon-telegram.svg')" alt="">
                </a>
                <a href="#" class="cost-card__link">
                  <img :src="$getImage('icon-viber.svg')" alt="">
                </a>
                <a href="#" class="cost-card__link">
                  <img :src="$getImage('icon-whatsapp.svg')" alt="">
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- Const card end -->

  </div>
</template>
