<template>
    <div class="container mt-4">
        <!-- Tabs -->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Internal Vendors</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">External Vendors</a>
            </li>
        </ul>

        <!-- Vendor added list -->
        <div class="mt-3 mb-3 added-list-container">
            <div class="added-list-items">
                <span
                    v-for="vendor in selectedVendors"
                    :key="vendor.id"
                    :class="['padge-name-added', { red: isHovered[vendor.id] }]"
                    @mouseover="isHovered[vendor.id] = true"
                    @mouseleave="isHovered[vendor.id] = false"
                >
                    <template v-if="!isHovered[vendor.id]">
                        <span class="padge-icon"
                            ><svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.75233 12.7228C3.48427 12.1962 4.26092 11.7798 5.08228 11.4735C5.90363 11.1671 6.79287 11.0139 7.75 11.0139C8.70712 11.0139 9.59636 11.1671 10.4177 11.4735C11.2391 11.7798 12.0157 12.1962 12.7477 12.7228C13.3163 12.1343 13.7736 11.4394 14.1196 10.638C14.4658 9.83646 14.6389 8.95712 14.6389 8C14.6389 6.0912 13.9679 4.46586 12.626 3.12396C11.2841 1.78206 9.6588 1.11111 7.75 1.11111C5.8412 1.11111 4.21586 1.78206 2.87396 3.12396C1.53206 4.46586 0.861111 6.0912 0.861111 8C0.861111 8.95712 1.03419 9.83646 1.38036 10.638C1.72638 11.4394 2.18371 12.1343 2.75233 12.7228ZM7.75 8.43056C7.02466 8.43056 6.41277 8.18134 5.91433 7.6829C5.41589 7.18446 5.16667 6.57256 5.16667 5.84722C5.16667 5.12188 5.41589 4.50999 5.91433 4.01155C6.41277 3.51311 7.02466 3.26389 7.75 3.26389C8.47534 3.26389 9.08723 3.51311 9.58567 4.01155C10.0841 4.50999 10.3333 5.12188 10.3333 5.84722C10.3333 6.57256 10.0841 7.18446 9.58567 7.6829C9.08723 8.18134 8.47534 8.43056 7.75 8.43056ZM7.75 15.75C6.66916 15.75 5.65736 15.5488 4.71458 15.1464C3.77181 14.7439 2.95153 14.1939 2.25374 13.4963C1.5561 12.7985 1.00606 11.9782 0.603639 11.0354C0.201213 10.0926 0 9.08084 0 8C0 6.91916 0.201213 5.90736 0.603639 4.96458C1.00606 4.02181 1.5561 3.20153 2.25374 2.50374C2.95153 1.8061 3.77181 1.25606 4.71458 0.853638C5.65736 0.451212 6.66916 0.25 7.75 0.25C8.83084 0.25 9.84264 0.451212 10.7854 0.853638C11.7282 1.25606 12.5485 1.8061 13.2463 2.50374C13.9439 3.20153 14.4939 4.02181 14.8964 4.96458C15.2988 5.90736 15.5 6.91916 15.5 8C15.5 9.08084 15.2988 10.0926 14.8964 11.0354C14.4939 11.9785 13.9439 12.7985 13.2463 13.4963C12.5485 14.1939 11.7282 14.7439 10.7854 15.1464C9.84264 15.5488 8.83084 15.75 7.75 15.75Z"
                                    fill="#667085"
                                />
                            </svg>
                        </span>
                        <span class="padge-text">{{ vendor.name }}</span>
                    </template>
                    <template v-else>
                        <span
                            class="padge-icon"
                            @click="removeVendor(vendor.id)"
                            ><svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_1_25976"
                                    style="mask-type: alpha"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="18"
                                    height="18"
                                >
                                    <rect
                                        width="18"
                                        height="18"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_1_25976)">
                                    <path
                                        d="M11.2054 13.3122V12.1872H13.8304V13.3122H11.2054ZM11.2054 7.31216V6.18716H16.0804V7.31216H11.2054ZM11.2054 10.3122V9.18716H15.3304V10.3122H11.2054ZM2.66699 5.99966H1.91699V4.87466H4.81593V3.98047H7.26787V4.87466H10.167V5.99966H9.41699V12.5188C9.41699 12.8977 9.28574 13.2184 9.02324 13.4809C8.76074 13.7434 8.44005 13.8747 8.06118 13.8747H4.0228C3.64393 13.8747 3.32324 13.7434 3.06074 13.4809C2.79824 13.2184 2.66699 12.8977 2.66699 12.5188V5.99966ZM3.79199 5.99966V12.5188C3.79199 12.5766 3.81599 12.6295 3.86399 12.6775C3.91212 12.7256 3.96505 12.7497 4.0228 12.7497H8.06118C8.1188 12.7497 8.17168 12.7256 8.2198 12.6775C8.26793 12.6295 8.29199 12.5766 8.29199 12.5188V5.99966H3.79199Z"
                                        fill="white"
                                    />
                                </g>
                            </svg>
                        </span>
                        <span
                            class="padge-text"
                            @click="removeVendor(vendor.id)"
                            style="color: #fff; cursor: pointer"
                        >
                            Delete Vendor
                        </span>
                    </template>
                </span>
            </div>
            <div class="added-list-actions">
                <span
                    class="padge-delete-vendors"
                    @click="clearSelectedVendors"
                >
                    <span class="padge-icon">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_1_25976"
                                style="mask-type: alpha"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="18"
                                height="18"
                            >
                                <rect width="18" height="18" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1_25976)">
                                <path
                                    d="M11.2054 13.3122V12.1872H13.8304V13.3122H11.2054ZM11.2054 7.31216V6.18716H16.0804V7.31216H11.2054ZM11.2054 10.3122V9.18716H15.3304V10.3122H11.2054ZM2.66699 5.99966H1.91699V4.87466H4.81593V3.98047H7.26787V4.87466H10.167V5.99966H9.41699V12.5188C9.41699 12.8977 9.28574 13.2184 9.02324 13.4809C8.76074 13.7434 8.44005 13.8747 8.06118 13.8747H4.0228C3.64393 13.8747 3.32324 13.7434 3.06074 13.4809C2.79824 13.2184 2.66699 12.8977 2.66699 12.5188V5.99966ZM3.79199 5.99966V12.5188C3.79199 12.5766 3.81599 12.6295 3.86399 12.6775C3.91212 12.7256 3.96505 12.7497 4.0228 12.7497H8.06118C8.1188 12.7497 8.17168 12.7256 8.2198 12.6775C8.26793 12.6295 8.29199 12.5766 8.29199 12.5188V5.99966H3.79199Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </span>
                    <span class="padge-text">Delete All Vendors</span>
                </span>
            </div>
        </div>

        <!-- Vendor Table -->
        <table class="table border">
            <thead>
                <tr>
                    <th>
                        <div class="main-header">
                            <span class="text">ID</span>
                            <span class="sort">
                                <i
                                    class="fas fa-angle-up"
                                    :class="{
                                        active:
                                            sortKey === 'id' &&
                                            sortOrder === 'asc',
                                    }"
                                    @click="sort('id', 'asc')"
                                ></i>
                                <i
                                    class="fas fa-angle-down"
                                    :class="{
                                        active:
                                            sortKey === 'id' &&
                                            sortOrder === 'desc',
                                    }"
                                    @click="sort('id', 'desc')"
                                ></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="main-header">
                            <span class="text">Name</span>

                            <span class="sort">
                                <i
                                    class="fas fa-angle-up"
                                    :class="{
                                        active:
                                            sortKey === 'name' &&
                                            sortOrder === 'asc',
                                    }"
                                    @click="sort('name', 'asc')"
                                ></i>
                                <i
                                    class="fas fa-angle-down"
                                    :class="{
                                        active:
                                            sortKey === 'name' &&
                                            sortOrder === 'desc',
                                    }"
                                    @click="sort('name', 'desc')"
                                ></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="main-header">
                            <span class="text">Classification</span>
                            <span class="sort">
                                <i
                                    class="fas fa-angle-up"
                                    :class="{
                                        active:
                                            sortKey === 'classification' &&
                                            sortOrder === 'asc',
                                    }"
                                    @click="sort('classification', 'asc')"
                                ></i>
                                <i
                                    class="fas fa-angle-down"
                                    :class="{
                                        active:
                                            sortKey === 'classification' &&
                                            sortOrder === 'desc',
                                    }"
                                    @click="sort('classification', 'desc')"
                                ></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="main-header">
                            <span class="text">Country</span>
                            <span class="sort">
                                <i
                                    class="fas fa-angle-up"
                                    :class="{
                                        active:
                                            sortKey === 'country' &&
                                            sortOrder === 'asc',
                                    }"
                                    @click="sort('country', 'asc')"
                                ></i>
                                <i
                                    class="fas fa-angle-down"
                                    :class="{
                                        active:
                                            sortKey === 'country' &&
                                            sortOrder === 'desc',
                                    }"
                                    @click="sort('country', 'desc')"
                                ></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="main-header">
                            <span class="text">Categories</span>
                            <span class="sort">
                                <i
                                    class="fas fa-angle-up"
                                    :class="{
                                        active:
                                            sortKey === 'categories' &&
                                            sortOrder === 'asc',
                                    }"
                                    @click="sort('categories', 'asc')"
                                ></i>
                                <i
                                    class="fas fa-angle-down"
                                    :class="{
                                        active:
                                            sortKey === 'categories' &&
                                            sortOrder === 'desc',
                                    }"
                                    @click="sort('categories', 'desc')"
                                ></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="main-header">
                            <span class="text">Countries</span>
                            <span class="sort">
                                <i
                                    class="fas fa-angle-up"
                                    :class="{
                                        active:
                                            sortKey === 'countries' &&
                                            sortOrder === 'asc',
                                    }"
                                    @click="sort('countries', 'asc')"
                                ></i>
                                <i
                                    class="fas fa-angle-down"
                                    :class="{
                                        active:
                                            sortKey === 'countries' &&
                                            sortOrder === 'desc',
                                    }"
                                    @click="sort('countries', 'desc')"
                                ></i>
                            </span>
                        </div>
                    </th>
                </tr>
                <tr class="second-tr">
                    <th>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                v-model="searchId"
                                style="border: none; outline: none"
                            />
                            <span
                                class="input-group-text"
                                style="
                                    border: none;
                                    outline: none;
                                    display: flex;
                                    align-items: center;
                                "
                            >
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                v-model="searchName"
                                style="border: none; outline: none"
                            />
                            <span
                                class="input-group-text"
                                style="
                                    border: none;
                                    outline: none;
                                    display: flex;
                                    align-items: center;
                                "
                            >
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                v-model="searchClassification"
                                style="border: none; outline: none"
                            />
                            <span
                                class="input-group-text"
                                style="
                                    border: none;
                                    outline: none;
                                    display: flex;
                                    align-items: center;
                                "
                            >
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                v-model="searchCountry"
                                style="border: none; outline: none"
                            />
                            <span
                                class="input-group-text"
                                style="
                                    border: none;
                                    outline: none;
                                    display: flex;
                                    align-items: center;
                                "
                            >
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                v-model="searchCategories"
                                style="border: none; outline: none"
                            />
                            <span
                                class="input-group-text"
                                style="
                                    border: none;
                                    outline: none;
                                    display: flex;
                                    align-items: center;
                                "
                            >
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </th>
                    <th>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                v-model="searchCountries"
                                style="border: none; outline: none"
                            />
                            <span
                                class="input-group-text"
                                style="
                                    border: none;
                                    outline: none;
                                    display: flex;
                                    align-items: center;
                                "
                            >
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </th>

                    <th class="add-all-btn-container">
                        <button
                            class="add-all-btn"
                            style="border: none; outline: none"
                            @click="addAllVendors"
                        >
                            <span
                                ><svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.48081 13.375C1.10681 13.375 0.787313 13.2426 0.522313 12.9777C0.257438 12.7127 0.125 12.3932 0.125 12.0192V1.98081C0.125 1.60681 0.257438 1.28731 0.522313 1.02231C0.787313 0.757438 1.10681 0.625 1.48081 0.625H11.5192C11.8932 0.625 12.2127 0.757438 12.4777 1.02231C12.7426 1.28731 12.875 1.60681 12.875 1.98081V6.72456C12.6904 6.64569 12.5055 6.57888 12.3204 6.52413C12.1353 6.46925 11.9451 6.4255 11.75 6.39287V1.98081C11.75 1.92306 11.7259 1.87019 11.6778 1.82219C11.6298 1.77406 11.5769 1.75 11.5192 1.75H1.48081C1.42306 1.75 1.37019 1.77406 1.32219 1.82219C1.27406 1.87019 1.25 1.92306 1.25 1.98081V12.0192C1.25 12.0769 1.27406 12.1298 1.32219 12.1778C1.37019 12.2259 1.42306 12.25 1.48081 12.25H5.87413C5.902 12.4576 5.94331 12.654 5.99806 12.8391C6.05294 13.0243 6.11975 13.2029 6.1985 13.375H1.48081ZM1.25 12.25V1.75V6.39287V6.33663V12.25ZM2.9375 10.4759H5.95044C5.98319 10.2808 6.03175 10.0906 6.09612 9.9055C6.16062 9.72038 6.23081 9.53556 6.30669 9.35106H2.9375V10.4759ZM2.9375 7.5625H7.69287C8.01587 7.2885 8.36056 7.05894 8.72694 6.87381C9.09331 6.68869 9.48563 6.55719 9.90388 6.47931V6.4375H2.9375V7.5625ZM2.9375 4.64894H10.0625V3.52413H2.9375V4.64894ZM11 14.9183C10.0635 14.9183 9.26687 14.5899 8.61012 13.9332C7.95337 13.2764 7.625 12.4798 7.625 11.5433C7.625 10.6068 7.95337 9.81019 8.61012 9.15344C9.26687 8.49669 10.0635 8.16831 11 8.16831C11.9365 8.16831 12.7331 8.49669 13.3899 9.15344C14.0466 9.81019 14.375 10.6068 14.375 11.5433C14.375 12.4798 14.0466 13.2764 13.3899 13.9332C12.7331 14.5899 11.9365 14.9183 11 14.9183ZM10.6683 13.75H11.3317V11.875H13.2067V11.2116H11.3317V9.33663H10.6683V11.2116H8.79331V11.875H10.6683V13.75Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            Add All
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vendor in paginatedVendors" :key="vendor.id">
                    <td>
                        <span class="badge-id">
                            <span class="padge-icon"
                                ><svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1_25993)">
                                        <mask
                                            id="mask0_1_25993"
                                            style="mask-type: alpha"
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="8"
                                            height="9"
                                        >
                                            <rect
                                                x="0.259766"
                                                y="0.478516"
                                                width="7.74023"
                                                height="7.74023"
                                                fill="#D9D9D9"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_1_25993)">
                                            <path
                                                d="M3.1626 6.2832C2.98522 6.2832 2.83337 6.22005 2.70705 6.09373C2.58074 5.96741 2.51758 5.81556 2.51758 5.63818V1.76807C2.51758 1.59069 2.58074 1.43884 2.70705 1.31252C2.83337 1.18621 2.98522 1.12305 3.1626 1.12305H6.06519C6.24257 1.12305 6.39441 1.18621 6.52073 1.31252C6.64705 1.43884 6.71021 1.59069 6.71021 1.76807V5.63818C6.71021 5.81556 6.64705 5.96741 6.52073 6.09373C6.39441 6.22005 6.24257 6.2832 6.06519 6.2832H3.1626ZM1.87256 7.57324C1.69518 7.57324 1.54333 7.51008 1.41701 7.38377C1.2907 7.25745 1.22754 7.1056 1.22754 6.92822V2.41309H1.87256V6.92822H5.42017V7.57324H1.87256Z"
                                                fill="#667085"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_25993">
                                            <rect
                                                width="8"
                                                height="8"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span class="padge-text">{{ vendor.id }}</span>
                        </span>
                    </td>
                    <td>
                        <span class="padge-name">
                            <spane class="padge-icon"
                                ><svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.75233 12.7228C3.48427 12.1962 4.26092 11.7798 5.08228 11.4735C5.90363 11.1671 6.79287 11.0139 7.75 11.0139C8.70712 11.0139 9.59636 11.1671 10.4177 11.4735C11.2391 11.7798 12.0157 12.1962 12.7477 12.7228C13.3163 12.1343 13.7736 11.4394 14.1196 10.638C14.4658 9.83646 14.6389 8.95712 14.6389 8C14.6389 6.0912 13.9679 4.46586 12.626 3.12396C11.2841 1.78206 9.6588 1.11111 7.75 1.11111C5.8412 1.11111 4.21586 1.78206 2.87396 3.12396C1.53206 4.46586 0.861111 6.0912 0.861111 8C0.861111 8.95712 1.03419 9.83646 1.38036 10.638C1.72638 11.4394 2.18371 12.1343 2.75233 12.7228ZM7.75 8.43056C7.02466 8.43056 6.41277 8.18134 5.91433 7.6829C5.41589 7.18446 5.16667 6.57256 5.16667 5.84722C5.16667 5.12188 5.41589 4.50999 5.91433 4.01155C6.41277 3.51311 7.02466 3.26389 7.75 3.26389C8.47534 3.26389 9.08723 3.51311 9.58567 4.01155C10.0841 4.50999 10.3333 5.12188 10.3333 5.84722C10.3333 6.57256 10.0841 7.18446 9.58567 7.6829C9.08723 8.18134 8.47534 8.43056 7.75 8.43056ZM7.75 15.75C6.66916 15.75 5.65736 15.5488 4.71458 15.1464C3.77181 14.7439 2.95153 14.1939 2.25374 13.4963C1.5561 12.7985 1.00606 11.9782 0.603639 11.0354C0.201213 10.0926 0 9.08084 0 8C0 6.91916 0.201213 5.90736 0.603639 4.96458C1.00606 4.02181 1.5561 3.20153 2.25374 2.50374C2.95153 1.8061 3.77181 1.25606 4.71458 0.853638C5.65736 0.451212 6.66916 0.25 7.75 0.25C8.83084 0.25 9.84264 0.451212 10.7854 0.853638C11.7282 1.25606 12.5485 1.8061 13.2463 2.50374C13.9439 3.20153 14.4939 4.02181 14.8964 4.96458C15.2988 5.90736 15.5 6.91916 15.5 8C15.5 9.08084 15.2988 10.0926 14.8964 11.0354C14.4939 11.9785 13.9439 12.7985 13.2463 13.4963C12.5485 14.1939 11.7282 14.7439 10.7854 15.1464C9.84264 15.5488 8.83084 15.75 7.75 15.75Z"
                                        fill="#667085"
                                    />
                                </svg> </spane
                            ><span class="padge-text">{{
                                vendor.name
                            }}</span></span
                        >
                    </td>
                    <td>{{ vendor.classification }}</td>
                    <td>{{ vendor.country }}</td>
                    <td>{{ vendor.categories }}</td>
                    <td>{{ vendor.countries }}</td>
                    <td class="add-container" @click="addVendor(vendor)">
                        <span class="icon-btn"
                            ><svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_1_26245"
                                    style="mask-type: alpha"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="18"
                                    height="18"
                                >
                                    <rect
                                        width="18"
                                        height="18"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_1_26245)">
                                    <path
                                        d="M8.25 12.75H9.75V9.75H12.75V8.25H9.75V5.25H8.25V8.25H5.25V9.75H8.25V12.75ZM9 16.5C7.9625 16.5 6.9875 16.3031 6.075 15.9094C5.1625 15.5156 4.36875 14.9813 3.69375 14.3063C3.01875 13.6313 2.48438 12.8375 2.09063 11.925C1.69687 11.0125 1.5 10.0375 1.5 9C1.5 7.9625 1.69687 6.9875 2.09063 6.075C2.48438 5.1625 3.01875 4.36875 3.69375 3.69375C4.36875 3.01875 5.1625 2.48438 6.075 2.09063C6.9875 1.69687 7.9625 1.5 9 1.5C10.0375 1.5 11.0125 1.69687 11.925 2.09063C12.8375 2.48438 13.6313 3.01875 14.3063 3.69375C14.9813 4.36875 15.5156 5.1625 15.9094 6.075C16.3031 6.9875 16.5 7.9625 16.5 9C16.5 10.0375 16.3031 11.0125 15.9094 11.925C15.5156 12.8375 14.9813 13.6313 14.3063 14.3063C13.6313 14.9813 12.8375 15.5156 11.925 15.9094C11.0125 16.3031 10.0375 16.5 9 16.5ZM9 15C10.675 15 12.0938 14.4187 13.2563 13.2563C14.4187 12.0938 15 10.675 15 9C15 7.325 14.4187 5.90625 13.2563 4.74375C12.0938 3.58125 10.675 3 9 3C7.325 3 5.90625 3.58125 4.74375 4.74375C3.58125 5.90625 3 7.325 3 9C3 10.675 3.58125 12.0938 4.74375 13.2563C5.90625 14.4187 7.325 15 9 15Z"
                                        fill="#174F6B"
                                    />
                                </g>
                            </svg>
                        </span>
                        <span class="add-text">ADD</span>
                    </td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>

        <!-- Pagination and Submit -->
        <div
            class="d-flex mb-5 mt-5 justify-content-between align-items-center"
            style="margin-left: 40%"
        >
            <div class="pagination-container">
                <span class="pagination-text">
                    <span class="setting-icon"
                        ><svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_1_26659"
                                style="mask-type: alpha"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                            >
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1_26659)">
                                <path
                                    d="M10.1346 21L9.77306 18.1077C9.4539 18.0116 9.10873 17.8603 8.73756 17.6538C8.3664 17.4474 8.05073 17.2263 7.79056 16.9905L5.12306 18.125L3.25781 14.875L5.56356 13.1365C5.53406 12.9558 5.50973 12.7697 5.49056 12.578C5.47123 12.3863 5.46156 12.2001 5.46156 12.0192C5.46156 11.8512 5.47123 11.6747 5.49056 11.4895C5.50973 11.3042 5.53406 11.0955 5.56356 10.8635L3.25781 9.125L5.12306 5.9135L7.77131 7.02875C8.06998 6.78008 8.39306 6.55575 8.74056 6.35575C9.0879 6.15575 9.42565 6.00125 9.75381 5.89225L10.1346 3H13.8656L14.2271 5.9115C14.6104 6.04617 14.9491 6.20067 15.2433 6.375C15.5375 6.54933 15.8404 6.76725 16.1521 7.02875L18.8771 5.9135L20.7423 9.125L18.3596 10.9212C18.4147 11.1276 18.4456 11.317 18.4521 11.4895C18.4584 11.6618 18.4616 11.832 18.4616 12C18.4616 12.1552 18.4551 12.3189 18.4423 12.4913C18.4295 12.6637 18.4 12.8724 18.3538 13.1173L20.6981 14.875L18.8328 18.125L16.1521 16.9712C15.8404 17.2327 15.5269 17.4571 15.2116 17.6443C14.8962 17.8314 14.5681 17.9795 14.2271 18.0885L13.8656 21H10.1346ZM11.0001 20H12.9558L13.3251 17.2923C13.8289 17.1589 14.2824 16.9759 14.6856 16.7432C15.0889 16.5106 15.4995 16.1917 15.9173 15.7865L18.4116 16.85L19.4058 15.15L17.2173 13.5058C17.3006 13.2211 17.3558 12.9593 17.3828 12.7203C17.4096 12.4811 17.4231 12.241 17.4231 12.0192C17.4231 11.8512 17.4096 11.6747 17.3828 11.4895C17.3558 11.3042 17.3006 11.0955 17.2173 10.8635L19.4443 8.85L18.4501 7.15L15.8981 8.21925C15.5956 7.88725 15.1978 7.576 14.7048 7.2855C14.212 6.99517 13.7456 6.80258 13.3058 6.70775L13.0001 4H11.0058L10.6943 6.6885C10.1905 6.79617 9.72731 6.96958 9.30481 7.20875C8.88248 7.44775 8.46231 7.77625 8.04431 8.19425L5.55006 7.15L4.55581 8.85L6.72506 10.4693C6.64173 10.6936 6.5834 10.9372 6.55006 11.2C6.51673 11.4628 6.50006 11.7359 6.50006 12C6.50006 12.2731 6.51673 12.525 6.55006 12.775C6.5834 13.025 6.63531 13.2686 6.70581 13.5058L4.55581 15.15L5.55006 16.85L8.02506 15.8C8.4174 16.1962 8.82473 16.5138 9.24706 16.753C9.66956 16.992 10.1456 17.1782 10.6751 17.3115L11.0001 20ZM11.9731 14.5C12.6706 14.5 13.2616 14.2577 13.7463 13.773C14.2308 13.2885 14.4731 12.6975 14.4731 12C14.4731 11.3025 14.2308 10.7115 13.7463 10.227C13.2616 9.74233 12.6706 9.5 11.9731 9.5C11.2719 9.5 10.6799 9.74233 10.1971 10.227C9.7144 10.7115 9.47306 11.3025 9.47306 12C9.47306 12.6975 9.7144 13.2885 10.1971 13.773C10.6799 14.2577 11.2719 14.5 11.9731 14.5Z"
                                    fill="#667085"
                                />
                            </g>
                        </svg> </span
                    >{{ vendors.length }} / lignes</span
                >
                <span class="pagination-actions">
                    <span @click="prevPage" :disabled="currentPage === 1">
                        <i class="fas fa-angle-left"></i>
                    </span>
                    {{ currentPage }} - {{ totalPages }}
                    <span
                        @click="nextPage"
                        :disabled="currentPage === totalPages"
                    >
                        <i class="fas fa-angle-right"></i>
                    </span>
                </span>
            </div>
            <button class="btn btn-success btn-sub">
                <span class="sub-txt">Submit</span>
                <span class="sub-icon"
                    ><svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.1627 9.5002L0.887695 5.2252L1.95645 4.15645L5.1627 7.3627L12.0439 0.481445L13.1127 1.5502L5.1627 9.5002Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

let vendors = ref([
    {
        id: 12571,
        name: "Alice Johnson",
        classification: "A1B2",
        country: "USA",
        categories: "Finance",
        countries: "North America",
    },
    {
        id: 12572,
        name: "Bob Smith",
        classification: "C3D4",
        country: "Canada",
        categories: "IT",
        countries: "North America",
    },
    {
        id: 12573,
        name: "Charlie Brown",
        classification: "E5F6",
        country: "UK",
        categories: "Marketing",
        countries: "Europe",
    },
    {
        id: 12574,
        name: "Diana Prince",
        classification: "G7H8",
        country: "Germany",
        categories: "Sales",
        countries: "Europe",
    },
    {
        id: 12575,
        name: "Eve Adams",
        classification: "I9J0",
        country: "France",
        categories: "HR",
        countries: "Europe",
    },
    {
        id: 12576,
        name: "Frank Castle",
        classification: "K1L2",
        country: "Italy",
        categories: "Operations",
        countries: "Europe",
    },
    {
        id: 12577,
        name: "Grace Hopper",
        classification: "M3N4",
        country: "Spain",
        categories: "Development",
        countries: "Europe",
    },
    {
        id: 12578,
        name: "Hank Pym",
        classification: "O5P6",
        country: "Australia",
        categories: "Research",
        countries: "Oceania",
    },
    {
        id: 12579,
        name: "Ivy League",
        classification: "Q7R8",
        country: "Japan",
        categories: "Design",
        countries: "Asia",
    },
    {
        id: 12580,
        name: "Jack Sparrow",
        classification: "S9T0",
        country: "India",
        categories: "Logistics",
        countries: "Asia",
    },
]);

// New state for selected vendors
let selectedVendors = ref([]);

let sortKey = ref("");
let sortOrder = ref("");

// Add search terms for each column
let searchId = ref("");
let searchName = ref("");
let searchClassification = ref("");
let searchCountry = ref("");
let searchCategories = ref("");
let searchCountries = ref("");

const sort = (key, order) => {
    sortKey.value = key;
    sortOrder.value = order;
};

// Method to add a vendor to the selected list
const addVendor = (vendor) => {
    if (!selectedVendors.value.some((v) => v.id === vendor.id)) {
        selectedVendors.value.push(vendor);
    }
};

// Method to add all vendors to the selected list
const addAllVendors = () => {
    filteredVendors.value.forEach((vendor) => {
        if (!selectedVendors.value.some((v) => v.id === vendor.id)) {
            selectedVendors.value.push(vendor);
        }
    });
};

// Method to clear all selected vendors
const clearSelectedVendors = () => {
    selectedVendors.value = [];
};

// Filter vendors based on search terms
const filteredVendors = computed(() => {
    return vendors.value.filter((vendor) => {
        return (
            vendor.id.toString().includes(searchId.value) &&
            vendor.name
                .toLowerCase()
                .includes(searchName.value.toLowerCase()) &&
            vendor.classification
                .toLowerCase()
                .includes(searchClassification.value.toLowerCase()) &&
            vendor.country
                .toLowerCase()
                .includes(searchCountry.value.toLowerCase()) &&
            vendor.categories
                .toLowerCase()
                .includes(searchCategories.value.toLowerCase()) &&
            vendor.countries
                .toLowerCase()
                .includes(searchCountries.value.toLowerCase())
        );
    });
});

const sortedVendors = computed(() => {
    return [...filteredVendors.value].sort((a, b) => {
        if (sortOrder.value === "asc") {
            return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
        } else {
            return a[sortKey.value] < b[sortKey.value] ? 1 : -1;
        }
    });
});

const itemsPerPage = 5;
const currentPage = ref(1);

const totalPages = computed(() => {
    return Math.ceil(vendors.value.length / itemsPerPage);
});

const paginatedVendors = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedVendors.value.slice(start, end);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const isHovered = ref({});

const removeVendor = (vendorId) => {
    selectedVendors.value = selectedVendors.value.filter(
        (vendor) => vendor.id !== vendorId
    );
};
</script>

<style scoped>
.vendor-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/* .padge-icon {
    margin-right: 10px;
} */
thead tr:first-child {
    background: #d2d5da;
}

.second-tr,
.second-tr th {
    padding: 0;
}
.second-tr th {
    vertical-align: middle;
}
.table th {
    position: relative;
    border: 1px solid #66708573;
    /* text-align: right; */
}

.fas {
    cursor: pointer;
    color: #667085;
    margin-left: 5px;
}
.fa-search:before {
    font-size: smaller;
    margin-inline-end: 5px;
    color: #c1c1c1;
}

.active {
    color: blue;
}

.badge {
    margin-right: 5px;
    cursor: pointer;
}

.nav-tabs .nav-link.active {
    background-color: #f8f9fa;
}

.input-group {
    flex-wrap: nowrap;
}

.input-group-text {
    background-color: transparent;
    border: none;
    padding: 0;
}

.form-control-sm {
    width: 100%;
    margin-bottom: 5px;
}

.btn-sm {
    margin-right: 5px;
}
.form-control:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
.add-all-btn-container {
    background: #00517b;
}
.add-all-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px 2px 6px;
    gap: 6px;
    width: 88px;
    height: 20px;
    background: #00517b;
    color: #fff;
}
.add-container {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
    width: 88px;
    height: 44px;
    gap: 5px;
}
.add-text {
    color: #00517b;
    padding-top: 3px;
}
.badge-id {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px 2px 6px;
    gap: 6px;
    width: 65px;
    height: 20px;
    background: #d9d9d9;
    border-radius: 16px;
}
.badge-id .padge-text {
    font-size: 12px;
}
td.add-container:hover .icon-btn,
td.add-container:hover .add-text {
    scale: 1.1;
}

.padge-name,
.padge-name-added,
.padge-delete-vendors {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 8px 2px 6px;
    gap: 6px;
    background: #03a1aa1a;
    border-radius: 16px;
}
.padge-name-added {
    width: fit-content;
    cursor: pointer;
    background: #03a1aa66;
    margin-bottom: 0.5rem;
}
.padge-name-added.red {
    background: #ee776a;
}
.padge-delete-vendors {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px 2px 6px;
    gap: 6px;
    width: fit-content;
    cursor: pointer;
    background: #ee776a;
    color: #fff;
    border-radius: 6px;
}
.padge-icon {
    margin-top: -3px;
}
.added-list-items {
    display: flex;
    gap: 10px;
}
.added-list-actions {
    display: flex;
    justify-content: flex-end;
}
.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sort {
    display: flex;
    flex-direction: column;
}
.btn-sub {
    height: 35px;
    background: #03a1aa;
    border: 1px solid rgba(3, 161, 170, 0.5);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-content: center;
    align-items: center;
}
.pagination-container {
    display: flex;
    justify-content: center;
    /* gap: 10px; */
    align-items: center;
}
.pagination-text {
    background: #ffffff;
    border: 1px solid #eaecf0;
    border-radius: 8px 0px 0px 8px;
    padding: 8px;
}
.pagination-actions {
    background: #ffffff;
    border: 1px solid #eaecf0;
    border-radius: 0px 8px 8px 0px;
    padding: 8px;
}
</style>
